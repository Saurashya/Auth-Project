import express from 'express'
import blogController from '../controllers/blogController.js'

const router = express.Router()

router.route('/').get(blogController.getAllBlogs)
router.route('/create').post(blogController.createBlog)
router.route('/delete').delete(blogController.deleteBlogs)


export default router