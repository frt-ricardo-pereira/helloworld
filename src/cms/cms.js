import CMS from 'netlify-cms-app'
import * as locals from '../styles/global.css'

import IndexPreview from './preview-templates/IndexPreview'
import OurTeamTemplate from './preview-templates/OurTeamPreview'
import NavBarPreview from './preview-templates/NavBarPreview'

CMS.registerPreviewStyle({locals});
CMS.registerPreviewTemplate('index', IndexPreview)
CMS.registerPreviewTemplate('ourteam', OurTeamTemplate)
CMS.registerPreviewTemplate('navbar', NavBarPreview)


