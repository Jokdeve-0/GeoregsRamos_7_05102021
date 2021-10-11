const express = require('express')
const router = express.Router()
const articlesCtrl = require('../controllers/Articles')
const authorization = require('../middleware/authorization')
const authorizationAdmin = require('../middleware/authorizationAdmin')
const multer = require('../middleware/multer-config')


router.post('/article-banned',authorizationAdmin,articlesCtrl.banned_article)
router.post('/answer-banned',authorizationAdmin,articlesCtrl.banned_answer)
router.post('/comment-banned',authorizationAdmin,articlesCtrl.banned_comment)
router.delete('/delete-comment',authorizationAdmin, articlesCtrl.delete_comment)
router.delete('/delete-answer',authorizationAdmin, articlesCtrl.delete_answer)
router.get('/article-moderate',authorizationAdmin,articlesCtrl.moderate_article)
router.post('/article-modify',authorization,articlesCtrl.modify_article)
router.put('/modify-comment',authorization, articlesCtrl.modify_comment)
router.get('/search/:search', authorization, articlesCtrl.retrieved_by_search)
router.get('/genre/:genre', authorization, articlesCtrl.retrieved_by_genre)
router.put('/modify-answer',authorization, articlesCtrl.modify_answer)
router.post('/newComment',authorization, articlesCtrl.create_comment)
router.post('/newArticle',authorization, multer, articlesCtrl.create_article)
router.post('/newanswer',authorization, articlesCtrl.create_answer)
router.get('/comments', authorization,articlesCtrl.retrieved_comments)
router.get('/answers', authorization,articlesCtrl.retrieved_answers)
router.put('/dislike',authorization, articlesCtrl.dislike_article)
router.delete('/delete',authorization, articlesCtrl.delete_by_id)
router.post('/users',authorization,articlesCtrl.retrieved_articles_by_user)
router.put('/like',authorization, articlesCtrl.like_article)
router.get('/:id', authorization, articlesCtrl.retrieved_one)
router.get('/', authorization, articlesCtrl.retrieved_all)


module.exports = router

