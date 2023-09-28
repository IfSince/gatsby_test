import { useEffect } from 'react'
import Seo from '../components/seo'
import { navigate } from 'gatsby';

const NotFoundPage = () => useEffect(() => navigate('/'), [])

export const Head = () => <Seo title="404: Not Found"/>

export default NotFoundPage
