const router = require('express').Router();
const { islogin } = require('../middleware/isLogin')
const { isRoom } = require("../middleware/isRoom")
const { DrawingAdd, viewVideo, firstQuestionInput, DrawQueUpdate, QuestionView, TwoQuestionInput } = require('../controllers/gamePlay')

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// 캔버스에 그린 그림을 db에 저장
router.post('/', islogin, isRoom, upload.single('file'), DrawingAdd)

// 저장된 그림을 video로 보여줌 
router.post('/viewVideo',viewVideo)

// 첫 번째 입력된 제시어를 db에 저장
router.post('/InputQuestion', islogin, isRoom, firstQuestionInput)

// 두 번째 입력된 제시어를 db에 저장
router.post('/TwoQuestionInput', islogin, isRoom, TwoQuestionInput)

// 그림이 저장되면 해당 그림의 id를 해당 제시어의 content에 저장
router.post('/DrawQueUpdate', islogin, isRoom, DrawQueUpdate)

// 제시어를 불러온다.
router.get('/QuestionView', islogin, isRoom, QuestionView)

module.exports = router;