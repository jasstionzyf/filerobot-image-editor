/** External Dependencies */
import { useCallback, useEffect, useState } from 'react';
/** Internal Dependencies */
import { useStore } from 'hooks';
import debounce from 'utils/debounce';
import loadImage from 'utils/loadImage';
import { SET_ORIGINAL_IMAGE } from 'actions';
import {
  StyledImgSearchWrapper,
  StyledSearchInput,
  StyledImgsWrapper,
} from './ImgSearch.styled';

async function APICall(path, method, bodyData) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const requesOptions = {
    method,
    headers: myHeaders,
    body: JSON.stringify(bodyData),
  };

  try {
    const response = await fetch(`${path}`, requesOptions);
    const json = await response.json();
    if (!response.ok) {
      return { error: json };
    }
    return { result: json };
  } catch (err) {
    return { error: 'Something went wrong' };
  }
}

const ImgSearch = () => {
  const { dispatch, config } = useStore();
  const [imgs, setImgs] = useState([]);

  const refreshImgs = debounce((searchStr = '') => {
    APICall(config.imageAppApi, 'post', {
      params: {
        age: null,
        gender: null,
        imageAppOpName: 'imageSearch',
        inputText: searchStr,
        pageSize: 100,
        peopleNum: null,
        source: null,
        pageNum: 1,
        imageType: 'photo',
        illegal: 0,
        sort: 'quality-desc',
        ccLicenceType: null,
      },
    })
      .then((res) => {
        if (res.result) {
          const result = JSON.parse(res.result);
          const formateImgs = (array = []) =>
            array.reduce(
              (arr, item, index) => {
                arr[index % 2].imgs.push(item);
                return arr;
              },
              [
                { indexKey: 1, imgs: [] },
                { indexKey: 2, imgs: [] },
              ],
            );

          setImgs(formateImgs(result?.responseItems ?? []));
        }
      })
      .catch(console.error);
  });

  useEffect(refreshImgs, []);

  const changeSearch = useCallback((e) => {
    refreshImgs(e.target.value);
  }, []);

  const setNewOriginalImage = (newOriginalImage) => {
    dispatch({
      type: SET_ORIGINAL_IMAGE,
      payload: {
        originalImage: newOriginalImage,
      },
    });
  };

  const loadImageAndSetImg = (imgToLoad) => {
    loadImage(imgToLoad, config.defaultSavedImageName)
      .then(setNewOriginalImage)
      .catch(console.error);
  };

  return (
    <StyledImgSearchWrapper>
      <StyledSearchInput
        name="width"
        onChange={changeSearch}
        size="small"
        placeholder="请输入搜索词"
      />
      <StyledImgsWrapper>
        {imgs.map((arr) => (
          <div key={arr.indexKey}>
            {arr.imgs?.map(({ url, imageId }) => (
              <img
                src={url}
                key={imageId}
                alt=""
                onClick={() => loadImageAndSetImg(url)}
              />
            ))}
          </div>
        ))}
      </StyledImgsWrapper>
    </StyledImgSearchWrapper>
  );
};

export default ImgSearch;
