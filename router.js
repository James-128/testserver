import root from './routes/root.js'
import notFound from './routes/notFound.js'
import hehe from './routes/hehe.js'

const router = (route, res) => {

    switch (route) {

        case '/':
            root(res)
            return

        case '/hehe':
            hehe(res)
            return

        default:
            notFound(res)
            return
    }
    
}

export default router