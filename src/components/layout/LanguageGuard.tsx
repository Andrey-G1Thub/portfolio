import { Navigate, Outlet, useParams } from 'react-router-dom'

function LanguageGuard() {
  const { lang } = useParams()

  if (lang !== 'ru' && lang !== 'en') {
    return <Navigate to="/ru" replace />
  }

  return <Outlet />
}
export default LanguageGuard
