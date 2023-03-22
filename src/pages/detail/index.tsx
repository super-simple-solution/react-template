import BreadCrumb from '@/components/breadcrumb'
import Card from './component/Card'

function Detail() {
  return (
    <>
      <div>
        <BreadCrumb name="0X444"></BreadCrumb>
        <div className="dash-box mt-24">
          <Card></Card>
        </div>
      </div>
    </>
  )
}

export default Detail
