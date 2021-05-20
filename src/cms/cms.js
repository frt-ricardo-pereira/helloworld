import CMS from 'netlify-cms-app'


import IndexPreview from './preview-templates/IndexPreview'

CMS.registerPreviewStyle("./src/styles/global.css");
CMS.registerPreviewTemplate('index', IndexPreview)

