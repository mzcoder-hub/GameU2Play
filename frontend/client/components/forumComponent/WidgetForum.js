import { Col } from 'react-bootstrap'

import forumHomecss from '../../styles/forumHome.module.css'
import NewBerita from '../widget/NewBerita'
import NewestTournament from '../widget/NewestTournament'

const WidgetForum = () => {
  return (
    <div className={forumHomecss.widgetContent}>
      <NewestTournament />
      <NewBerita />
    </div>
  )
}

export default WidgetForum
