import linkifyIt from 'linkify-it';
import tlds from 'tlds';

const linkify = linkifyIt().tlds(tlds);

export function dataParser(
  currentContent,
  mentionData,
  previewList,
  trigger
) {
  const objOfLinks = {};
  [...previewList].map(([key, value]) => {
    if(!objOfLinks[value.url]) {
      objOfLinks[value.url] = {...value}
    }
  });

  const body = currentContent.blocks.map((block) => {
    let blockText = block.text;
    let matchArr = linkify.match(block.text) || [];
    if(block.entityRanges.length) {
      block.entityRanges.map((entityRange) => {
        const {offset, length} = entityRange;
        const taggedText = block.text.substr(offset, length);
        const withOutTrigger = taggedText.replace(trigger, '');
        if (mentionData[withOutTrigger]) {
          blockText = blockText.replace(
            taggedText,
            `[[[#rcType${mentionData[withOutTrigger].idTs}]]]`
          );
        }
      });
    }
    if(matchArr) {
      matchArr.forEach((match) => {
        const linkText = block.text.substr(match.index, match.lastIndex);
        if (linkText !== null && linkText !== '' && objOfLinks[linkText]) {
          blockText = blockText.replace(
            linkText,
            `[[[#rcType${objOfLinks[linkText].idTs}]]]`
          );
        }
      })
    }
    return blockText;
  });

  const richMentionContent = Object.keys(mentionData).map((key) => ({
    id: mentionData[key].idTs,
    type: 'assetTag',
    info: {
      ...mentionData[key]
    }
  }));
  const richLinkContent = Object.keys(objOfLinks).map((key) => ({
    id: objOfLinks[key].idTs,
    type: 'url',
    info: {
      ...objOfLinks[key]
    }
  }));

  return {
    messageID: '<message ID>',
    senderID: '<creator userID>',
    data: {
      version: 'v1',
      body,
      richContent: [...richMentionContent, ...richLinkContent],
      counts: {
        share: 10,
        reactions: 100
      }
    }
  }
}