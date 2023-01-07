/** External Dependencies */
import {
  FineTune,
  Annotate,
  CropFrame,
  ImageFilters,
  Watermark,
  Resize,
} from '@scaleflex/icons';

/** Internal Dependencies */
import { TABS_IDS } from 'utils/constants';

export const AVAILABLE_TABS = [
  {
    id: TABS_IDS.ADJUST,
    labelKey: 'adjustTab',
    icon: CropFrame,
  },
  {
    id: TABS_IDS.FINETUNE,
    labelKey: 'finetuneTab',
    icon: FineTune,
  },
  {
    id: TABS_IDS.FILTERS,
    labelKey: 'filtersTab',
    icon: ImageFilters,
    hideFn: ({ useCloudimage }) => useCloudimage,
  },
  {
    id: TABS_IDS.WATERMARK,
    labelKey: 'watermarkTab',
    icon: Watermark,
  },
  {
    id: TABS_IDS.ANNOTATE,
    labelKey: 'annotateTab',
    icon: Annotate,
    hideFn: ({ useCloudimage }) => useCloudimage,
  },
  {
    id: TABS_IDS.RESIZE,
    labelKey: 'resizeTab',
    icon: Resize,
  },
  {
    id: TABS_IDS.AICREATION,
    labelKey: 'aicreationTab',
    icon: Resize,
  },
  {
    id: TABS_IDS.REPAIRANDCOMPLETION,
    labelKey: 'repairAndCompletionTab',
    icon: Resize,
  },
  {
    id: TABS_IDS.MATTING,
    labelKey: 'mattingTab',
    icon: Resize,
  },
  {
    id: TABS_IDS.PICHIGHSCORE,
    labelKey: 'picHighScoreTab',
    icon: Resize,
  },
];
