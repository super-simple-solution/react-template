import { useLocation } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

export function breadcrumb(props: { name?: string }) {
  const location = useLocation()
  return (
    <>
      <Breadcrumb spacing="8px" separator=">">
        <BreadcrumbItem className="bread-crumb-item">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>{props.name || location.pathname.replace('/', '')}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

export default breadcrumb
