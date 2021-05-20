import CMS from 'netlify-cms-app'
import styles from './src/styles/global.css'

import IndexPreview from './preview-templates/IndexPreview'

CMS.registerPreviewStyle({styles});
CMS.registerPreviewTemplate('index', IndexPreview)

