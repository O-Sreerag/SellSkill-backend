import verifyAdminToken from './verifyAdminTokenMiddleware'
import verifyTokenAndEmail from './verifyTokenMiddleware'

export default {
    verifyTokenMiddleWare : verifyTokenAndEmail,
    verifyAdminTokenMiddleWare : verifyAdminToken,
}