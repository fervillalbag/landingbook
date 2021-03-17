
import Card from '../../molecules/Card/Card'
import IntroInfo from '../../molecules/IntroInfo'
import { data } from '../../../data/download'

export default function Download() {
  return (
    <div className="container download">
      <IntroInfo
        title="Download the extension"
        description="We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
      />

      <div className="download__grid">
        {data.map(dataInfo => (
          <Card
            key={dataInfo.id}
            image={dataInfo.image}
            title={dataInfo.title}
            description={dataInfo.description}
            href={dataInfo.href}
            action={dataInfo.action}
          />
        ))}
      </div>
    </div>
  )
}
