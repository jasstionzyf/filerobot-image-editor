/** External Dependencies */
import { useCallback } from 'react';

/** Internal Dependencies */
import { DesignLayer, TransformersLayer } from 'components/Layers';
import { AppProviderOverridenValue } from 'context';
import { SET_CANVAS_SIZE } from 'actions';
import { useResizeObserver, useStore } from 'hooks';
import NodeControls from 'components/NodeControls';
import debounce from 'utils/debounce';
import CanvasNode from './CanvasNode';
import { CanvasContainer, StyledOrignalImage } from './MainCanvas.styled';

const MainCanvas = () => {
  const [observeResize] = useResizeObserver();
  const providedAppContext = useStore();

  const setNewCanvasSize = useCallback(
    ({ width: containerWidth, height: containerHeight }) => {
      providedAppContext.dispatch({
        type: SET_CANVAS_SIZE,
        payload: {
          canvasWidth: containerWidth,
          canvasHeight: containerHeight,
        },
      });
    },
    [],
  );

  const observeCanvasContainerResizing = useCallback(
    // build后，将lib引入到react项目中，这里不通过事件循环机制延时的话会不执行observe里的回调
    // 延时0时该项目中开发也不会执行，暂未找到具体原因，可能是observe的该dom挂载DOM树时机的问题
    debounce((element) => observeResize(element, setNewCanvasSize), 100),
    [],
  );

  return (
    <CanvasContainer
      className="FIE_canvas-container"
      ref={observeCanvasContainerResizing}
    >
      {!providedAppContext.textIdOfEditableContent && <NodeControls />}
      {providedAppContext.isShowOriginalImage && (
        <StyledOrignalImage
          className="FIE_original-image-compare"
          src={providedAppContext.originalImage.src}
        />
      )}
      <CanvasNode>
        <AppProviderOverridenValue overridingValue={providedAppContext}>
          <DesignLayer />
          <TransformersLayer />
        </AppProviderOverridenValue>
      </CanvasNode>
    </CanvasContainer>
  );
};

export default MainCanvas;
