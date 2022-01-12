import React from 'react';
import {
  convertToRaw,
} from 'draft-js';

import Modal from '../modal';
import Editor from '../editor';
import LinkPreview from '../linkpreview';
import { dataParser } from '../../utils';

function InputBox() {
  const [showEditor, toggleEditor] = React.useState(false);
  const [setTrigger, toggleTrigger] = React.useState(false);
  const [editorState, setEditorState] = React.useState(null);
  const [previewList, setPreviewList] = React.useState(new Map());
  const [maxHeight, setMaxHeight] = React.useState(220);
  const [mentionData, setMentionData] = React.useState({});
  const editorContainerRef = React.useRef();
  const trigger = '@';

  const addTriggerAfterCb = () => {
    toggleTrigger(false);
  }

  const handleSubmit = () => {
    const postData = dataParser(
      convertToRaw(editorState.getCurrentContent()),
      mentionData,
      previewList,
      trigger
    );
    console.log(postData);
  }

  const handleResize = () => {
    if(typeof window !== 'undefined') {
      const innerHeight = Math.abs(window.innerHeight - 122 - 280);
      setMaxHeight(innerHeight);
    }
  };

  const updatePreviewList = (type, data) => {
    let newPreviewList = previewList;
    switch (type) {
      case 'add':
        newPreviewList.set(data.offsetKey, {
          url: data.url,
          showPreview: true,
          idTs: `${Date.now()}${newPreviewList.size}`,
        });
        setPreviewList(
          new Map(newPreviewList)
        );
          break;
        case 'delete':
          newPreviewList.delete(data.offsetKey);
          setPreviewList(
            new Map(newPreviewList)
          );
          break;
        case 'toggleShow':
          const currState = newPreviewList.get(data.offsetKey);
          newPreviewList.set(data.offsetKey, {
            url: currState.url,
            showPreview: !currState.showPreview,
            idTs: currState.idTs
          });
          setPreviewList(
            new Map(newPreviewList)
          );
          break;
        default: break;
    }
  }

  const addMentionCb = (data) => {
    const oldMentions = mentionData || {};
    if (!oldMentions[data.name]) {
      const newMentionData = {
        ...oldMentions,
        [data.name]: {
          ...data,
          idTs: Date.now(),
        }
      }
      setMentionData(newMentionData);
    }
  }

  return (
    <>
      <style jsx>
        {`
          .input-container-intro{
            cursor: pointer;
          }
          .input-wrapper {
            width: 544px;
            min-height: 346px;
            max-height: 577px;
            position: relative;
            border-radius: 4px;
            background: #FFFFFF;
          }
          .header {
            width: 100%;
            border-bottom: 1px solid #E2E5E9;
            padding: 16px 24px;
            display: flex;
            align-items: center;
          }
          .user-image {
            width: 24px;
            height: 24px;
          }
          .user-name {
            width: 124px;
            height: 24px;
            margin-left: 8px;
          }
          .input-container {
            width: 100%;
            min-height: 221px;
            max-height: 452px;
            padding: 14px 24px;
            color: #2F363F;
          }
          .input-container :global(.public-DraftEditor-content) {
            height: 100%;
            max-height: 434px;
            overflow-y: auto;
          }
          .footer {
            background: #F1F4F8;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 24px;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            z-index: 5;
          }
          .btn {
            padding: 8px 16px;
            background: #FFFFFF;
            height: 36px;
            border: 1px solid #D1D5DB;
            margin-right: 16px;
          }
          .btn-container {
            display: flex;
            align-items: center;
          }
          .btn-black {
            background: #151E28;
            color: #FFFFFF;
            margin-right: 0px;
          }
          .trigger-indicator {
            display: none;
          }
          .desktop-link-preview {
            width: 100%;
          }
          .mobile-link-preview {
            width: 100%;
            padding: 16px;
            padding-top: 0;
          }
          @media (max-width: 981px) {
            .input-wrapper {
              width: 100%;
              height: 100%;
              max-height: 100%;
              min-height: unset;
              border-radius: unset;
            }
            .header {
              justify-content: space-between;
            }
            .input-container {
              min-height: 64px;
              overflow-y: auto;
            }
            .footer {
              background: #FFFFFF;
              padding: 16px;
              border-radius: unset;
              border-top: 1px solid #E2E5E9;
              z-index: 10001;
            }
            .user-info-box {
              width: 100%;
              display: flex;
              align-items: center;
            }
            .trigger-indicator {
              color: #2F363F;
              font-size: 14px;
              display: block;
            }
            .desktop--only {
              display: none !important;
            }
          }
          @media (min-width: 981px) {
            .mob--only {
              display: none !important;
            }
          }
        `}
      </style>
      <style jsx>
        {`
          @media (max-width: 981px) {
            .input-container {
              max-height: ${maxHeight}px;
            }
            .input-container :global(.public-DraftEditor-content) {
              height: 100%;
              max-height: ${maxHeight - 24}px;
              overflow-y: auto;
            }
          }
        `}
      </style>
      <div className="input-container-intro" onClick={() => toggleEditor(true)}>
        What do you have in mind?
      </div>
      {showEditor && (
        <Modal>
          <div className="input-wrapper">
            <div className="header">
              <div className="user-image round loader desktop--only"></div>
              <div className="user-name rectangle loader desktop--only"></div>
              <div className="user-info-box mob--only">
                <div className="user-image round loader"></div>
                <div className="user-name rectangle loader"></div>
              </div>
              <div
                className="btn btn-black rectangle pointer mob--only"
                onClick={handleSubmit}
              >
                Post
              </div>
            </div>
            <div className="input-container" ref={editorContainerRef}>
              <Editor
                setTrigger={setTrigger}
                trigger={trigger}
                ref={editorContainerRef}
                addTriggerAfterCb={addTriggerAfterCb}
                setEditorState={setEditorState}
                setPreviewLink={updatePreviewList}
                onFocusCb={handleResize}
                addMentionCb={addMentionCb}
              />
              <div className="desktop-link-preview desktop--only">
                <LinkPreview
                  previewList={previewList}
                  toggleShowPreview={updatePreviewList}
                />
              </div>
            </div>
            <div className="footer">
              <div className="btn-container desktop--only">
                <div
                  className="btn rectangle pointer"
                  onClick={() => toggleTrigger(true)}
                >
                  {trigger}
                </div>
                <div className="btn rectangle pointer">
                  Add Image
                </div>
              </div>
              <div
                className="btn btn-black rectangle pointer desktop--only"
                onClick={handleSubmit}
              >
                Post
              </div>
              <div
                className="trigger-indicator rectangle pointer mob-only"
                onClick={() => toggleTrigger(true)}
              >
                {trigger}
              </div>
            </div>
            <div className="mobile-link-preview mob--only">
              <LinkPreview
                previewList={previewList}
                toggleShowPreview={updatePreviewList}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default InputBox;