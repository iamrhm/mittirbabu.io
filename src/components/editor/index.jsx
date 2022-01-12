import React from 'react';

import { getFilteredSuperHeros } from '../../services';
import SuperheroEditor from '../../../superheroeditor';
import SuperheroCard from '../superherocard';
import CloseIcon from '../icons/close-icon';

function InputEditor({
  editorContainerRef = {},
  trigger = '@',
  setTrigger = false,
  addTriggerAfterCb = () => {},
  setEditorState = () => {},
  setPreviewLink = () => {},
  onFocusCb = () => {},
  addMentionCb = () => {},
}) {
  const fetchSuggestions = async (searchText) => {
    searchText = searchText.replace(trigger, '')
    .toLowerCase();
    if (searchText.length >= 3) {
      if(searchText.length <= searchText.trim().length + 1) {
        const suggestions = await getFilteredSuperHeros(searchText);
        return { suggestions, showHint: false };
      }
      return { suggestions: [], showHint: false };
    }
    return { suggestions: [], showHint: true };
  }

  const renderSuggestions = (
    {bottom, top, height} , suggestions, onClose, handleAddMention
  ) => {
    const offset = 24 + (2 * height);
    const listTop = editorContainerRef.current ?
    Math.abs(editorContainerRef.current.getBoundingClientRect().top - bottom - offset) : bottom;
    return (
      <>
        <style jsx>
          {`
            .suggestion-list-wrapper {
              position: absolute;
              width: 100%;
              z-index: 10001;
              height: 200px;
              left: 0;
              overflow: hidden;
              padding: 0 8px;
            }
            .suggestion-list-container {
              overflow: auto;
              height: 200px;
              border-radius: 8px;
              box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.06);
              border: 1px solid #E2E5E9;
              background: #F9FAFC;
            }
            .suggestion-header {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 16px;
            }
            .hero-tag {
              font-size: 12px;
              padding: 4px 8px;
              border: 1px solid #D1D5DB;
              border-radius: 100px;
              background: #fff;
            }
            .item-container {
              height: calc(100% - 58px);
              overflow: auto;
            }
            .item {
              padding: 10px 16px;
              cursor: pointer;
            }
            .item:hover {
              background: #EBEEF5;
            }
          `}
        </style>
        <style jsx>
          {`
            .suggestion-list-wrapper {
              top: ${listTop}px;
            }
          `}
        </style>
        <div className="suggestion-list-wrapper">
          <div className="suggestion-list-container">
            <div className="suggestion-header">
              <span className="hero-tag">
                Super Hero
              </span>
              <span className="close-icon" onClick={onClose}>
                <CloseIcon />
              </span>
            </div>
            <div
              className="item-container">
              {
                suggestions.map((data) => (
                  <div
                    className="item"
                    key={data.id}
                    onClick={() => handleAddMention(data)}
                  >
                    <SuperheroCard {...data} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </>
    )
  }

  const renderHint = ({bottom, top, height}, onClose) => {
    const offset = 24 + (2 * height);
    const listTop = editorContainerRef.current ?
    Math.abs(editorContainerRef.current.getBoundingClientRect().top - bottom - offset) : bottom;
    return (
      <>
        <style jsx>
          {`
            .suggestion-list-container-hint {
              position: absolute;
              width: 100%;
              z-index: 1001;
              left: 0;
              padding: 0 8px;
            }
            .suggestion-hint-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 12px 16px;
              background: #F9FAFC;
              border-radius: 8px;
              box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.06);
              border: 1px solid #E2E5E9;
            }
            .hint-text {
              color: #535B62;
              font-size: 13px;
            }
          `}
        </style>
        <style jsx>
          {`
            .suggestion-list-container-hint {
              top: ${listTop}px;
            }
          `}
        </style>
        <div
          className="suggestion-list-container-hint"
        >
          <div className="suggestion-hint-header">
            <span className="hint-text">
              Type 3 or more characters to search for super heros
            </span>
            <span className="close-icon" onClick={onClose}>
              <CloseIcon />
            </span>
          </div>
        </div>
      </>
    );
  }

  return (
    <SuperheroEditor
      setTrigger={setTrigger}
      trigger={trigger}
      ref={editorContainerRef}
      setEditorState={setEditorState}
      fetchSuggestions={fetchSuggestions}
      renderSuggestions={renderSuggestions}
      renderHint={renderHint}
      addTriggerAfterCb={addTriggerAfterCb}
      setPreviewLink={setPreviewLink}
      onFocusCb={onFocusCb}
      addMentionCb={addMentionCb}
    />
  )
}

export default React.forwardRef((props, ref) => <InputEditor
  editorContainerRef={ref} {...props}
/>);