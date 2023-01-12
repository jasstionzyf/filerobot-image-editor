# 构建说明

## 打包

在项目根目录执行 `npm run build:packages` 或者 `yarn run build:packages`
成功后即可在`packages/react-filerobot-image-editor/lib`目录中看到打包后的图片编辑器组件代码

## 引用

将 `lib` 文件目录拷贝到一个 `react` 项目中，在使用该组件的父组件内引入该文件

```javascript
import FilerobotImageEditor, { TOOLS } from 'xxx/lib';
import DuplicateIcon from '@scaleflex/icons/duplicate';

const config = {
  source: 'https://scaleflex.cloudimg.io/v7/demo/river.png',
  [TOOLS.CROP]: {
    presetsFolders: [],
  },
  [TOOLS.ROTATE]: {
    angle: 60,
    componentType: 'slider',
  },
  [TOOLS.WATERMARK]: {
    gallery: [
      'https://assets.scaleflex.com/Marketing/Logos/Scaleflex+Logos/PNG/SCALEFLEX+LOGO+-+Color+Dark+text.png?vh=45cac1',
      'https://assets.scaleflex.com/Marketing/Logos/Filerobot+Logos/Logo+with+Scaleflex/LOGOTYPE+WITH+SCALEFLEX-01-01.png?vh=76c5a7',
      'https://assets.scaleflex.com/Marketing/Logos/Filerobot+Logos/Logo+with+Scaleflex/LOGO+WITH+SCALEFLEX-01.png?vh=467711',
      'https://assets.scaleflex.com/Marketing/Logos/Filerobot+Logos/Logo+with+Scaleflex/LOGO+WITH+SCALEFLEX+ON+WHITE+BG.png?vh=7ae33c',
      'https://assets.scaleflex.com/Marketing/Logos/Filerobot+Logos/Logo+with+Scaleflex/LOGO+WITH+SCALEFLEX+ON+BLACK+BG.png?vh=619469',
      'https://assets.scaleflex.com/Marketing/Logos/Filerobot+Logos/Logo+Icon/FILEROBOT+ICON.png?vh=a4578e',
      'https://assets.scaleflex.com/Marketing/Logos/Filerobot+Logos/Logo+Icon/FILEROBOT+ICON+ON+WHITE+BG.png?vh=fa44f7',
      'https://assets.scaleflex.com/Marketing/Logos/Filerobot+Logos/Logo+Vertical/FILEROBOT+LOGO+VERTICAL.png?vh=05c4c3',
      'https://assets.scaleflex.com/Marketing/Logos/Scaleflex+Logos/PNG/SCALEFLEX+LOGO+-+Grayscale+Dark+text.png?vh=313898',
      'https://assets.scaleflex.com/Marketing/Logos/Scaleflex+Logos/Logo+Vertical/SCALEFLEX+LOGO+VERTICAL+WHITE+TEXT.png?vh=fca07b',
      'https://assets.scaleflex.com/Marketing/Logos/Scaleflex+Logos/Logo+Vertical/SCALEFLEX+LOGO+VERTICAL.PNG?vh=9a6fa1',
    ],
    textScalingRatio: 0.33,
    imageScalingRatio: 0.33,
  },
  [TOOLS.TEXT]: {
    text: 'Filerobot...',
  },
  moreSaveOptions: [
    {
      label: '[optional] Save option 1',
      icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6358 1.52611L10.6367 1.52669C12.0996 2.48423 13.0845 3.97393 13.4308 5.67868C13.7768 7.38223 13.4302 9.13505 12.3952 10.5416L12.39 10.5495C11.4327 12.0121 9.94346 12.9968 8.23923 13.3433C7.8098 13.4238 7.35685 13.4767 6.93362 13.4767C3.87462 13.4767 1.16037 11.323 0.519402 8.23739L0.439941 7.68114V7.66612C0.439941 7.51027 0.483542 7.38547 0.56594 7.28247C0.641164 7.18844 0.75786 7.12545 0.882464 7.10167C1.03156 7.10432 1.15179 7.14773 1.25156 7.22754C1.34816 7.30483 1.41201 7.4259 1.43422 7.55435C1.60415 8.96178 2.28062 10.2289 3.35006 11.1576L3.35104 11.1584C5.69121 13.1603 9.21628 12.8792 11.1914 10.5379C13.1928 8.19761 12.9116 4.67271 10.5702 2.6978C9.44164 1.73866 8.00291 1.28774 6.53782 1.40044L6.53642 1.40056C5.21046 1.51341 3.97038 2.10561 3.04061 3.03539L2.70462 3.37138L3.76055 3.27979L3.7724 3.27705C4.02521 3.21871 4.29448 3.3949 4.35713 3.66641C4.41517 3.91791 4.24109 4.1857 3.97196 4.25015L1.82243 4.62652C1.69199 4.6481 1.55534 4.62267 1.46788 4.5527L1.45879 4.54543L1.4488 4.53944C1.35779 4.48483 1.27678 4.36595 1.25738 4.24958L0.819079 2.08516L0.818029 2.08061C0.759688 1.8278 0.935874 1.55854 1.20739 1.49588C1.45905 1.43781 1.72702 1.61214 1.79125 1.88157L1.96243 2.82299L2.19817 2.56396C4.3538 0.195428 7.94737 -0.257315 10.6358 1.52611Z" fill="#5D6D7E"/><path d="M7.49822 3.76409V7.16923L9.24296 8.91397C9.32292 8.99394 9.38351 9.11495 9.38351 9.25603C9.38351 9.37909 9.3437 9.49734 9.24296 9.59809C9.16576 9.67528 9.0184 9.73864 8.9009 9.73864C8.77784 9.73864 8.65958 9.69883 8.55884 9.59809L6.67355 7.7128C6.59636 7.6356 6.533 7.48823 6.533 7.37074V3.76409C6.533 3.50452 6.75603 3.28148 7.0156 3.28148C7.3025 3.28148 7.49822 3.4772 7.49822 3.76409Z" fill="#5D6D7E"/></svg>',
      onClick: (openSaveModal, _saveDirectly) => openSaveModal(console.log),
    },
    {
      label: '[optional] Save option 2',
      icon: DuplicateIcon,
      onClick: (_openSaveModal, saveDirectly) => saveDirectly(console.log),
    },
  ],
};

export default () => (
  <div>
    <FilerobotImageEditor {...config} />
  </div>
);
```

启动后成功预览即表明已正确引入，`build`该`react`项目将打包代码放置到服务器对应目录，配置端口访问映射即可在线预览

## 注意事项

不建议使用`yarn`。可能生成的`yarn.lock`有问题，第一次安装依赖成功后，跑项目时，`@mui/material`和`react-color`经常报没有安装，要手动进入`packages/react-filerobot-image-editor/`目录强制执行`yarn add @emotion/react @emotion/styled @mui/material react-color -S`才可能正常安装。

react 项目需要保证有以下依赖，版本可能不必须一致
"@emotion/react": "^11.10.5",
"@emotion/styled": "^11.10.5",
"@mui/material": "^5.11.4",
"react-color": "^2.19.3",
"styled-components": "^5.3.6"
"@scaleflex/icons": "1.0.0-beta.80", 该版本必须一致
"konva": "8.3.2",
"react-konva": "18.1.1"
