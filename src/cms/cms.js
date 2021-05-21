import CMS from 'netlify-cms-app'
import styles from '../styles/global.css'

import IndexPreview from './preview-templates/IndexPreview'
import OurTeamTemplate from './preview-templates/OurTeamTemplate'

CMS.registerPreviewStyle({styles});
CMS.registerPreviewTemplate('index', IndexPreview)
CMS.registerPreviewTemplate('ourteam', OurTeamTemplate)

