const express = require('express');
const Like = require('../database/models/TermLike');

const router = express.Router();

router.post('/like', async (req, res) => {
    let exist = false;
    try {
        exist = await Like.findOne({
            userId: req.body.userId,
            courseId: req.body.courseId,
        });
        // eslint-disable-next-line no-empty
    } catch (error) {}

    if (exist) {
        if (!exist.like) {
            exist.like = true;
            exist.save((err) => {
                if (err) {
                    return res.send({
                        success: false,
                        result: null,
                        message: [
                            {
                                message: 'با خطا مواجه شد',
                            },
                        ],
                    });
                } else {
                    return res.send({
                        success: true,
                        result: exist,
                        message: [
                            {
                                message: 'با موفقیت انجام شد',
                            },
                        ],
                    });
                }
            });
        } else {
            return res.send({
                success: false,
                result: null,
                message: [{ message: 'شما قبلا این دوره را لایک کردید' }],
            });
        }
    } else {
        var like = new Like();
        like.userId = req.body.userId;
        like.courseId = req.body.courseId;
        like.like = true;
        like.save((err) => {
            if (err) {
                return res.send({
                    success: false,
                    result: null,
                    message: [
                        {
                            message: 'با خطا مواجه شد',
                        },
                    ],
                });
            } else {
                return res.send({
                    success: true,
                    result: like,
                    message: [
                        {
                            message: 'با موفقیت انجام شد',
                        },
                    ],
                });
            }
        });
    }
});

router.post('/dislike', async (req, res) => {
    let exist = false;
    try {
        exist = await Like.findOne({
            userId: req.body.userId,
            courseId: req.body.courseId,
        });
        // eslint-disable-next-line no-empty
    } catch (error) {}

    if (exist) {
        if (exist.like) {
            exist.like = false;
            // exist.createDate = new Date();

            exist.save((err) => {
                if (err) {
                    return res.send({
                        success: false,
                        result: null,
                        message: [
                            {
                                message: 'با خطا مواجه شد',
                            },
                        ],
                    });
                } else {
                    return res.send({
                        success: true,
                        result: exist,
                        message: [
                            {
                                message: 'با موفقیت انجام شد',
                            },
                        ],
                    });
                }
            });
        } else {
            return res.send({
                success: false,
                result: null,
                message: [{ message: 'شما قبلا این دوره را دیسلایک کردید' }],
            });
        }
    } else {
        var like = new Like();
        like.userId = req.body.userId;
        like.courseId = req.body.courseId;
        like.like = false;
        like.save((err) => {
            if (err) {
                return res.send({
                    success: false,
                    result: null,
                    message: [
                        {
                            message: 'با خطا مواجه شد',
                        },
                    ],
                });
            } else {
                return res.send({
                    success: true,
                    result: like,
                    message: [
                        {
                            message: 'با موفقیت انجام شد',
                        },
                    ],
                });
            }
        });
    }
});

router.get('/likeCount/:courseId', async (req, res) => {
    try {
        const exist = await Like.find({
            courseId: req.params.courseId,
        });

        if (exist.length > 0) {
            let like = 0;
            let dislike = 0;
            exist.forEach((item) => {
                if (item.like) like++;
                else dislike++;
            });
            return res.send({
                success: true,
                result: { like, dislike },
                message: [
                    {
                        message: 'با موفقیت انجام شد',
                    },
                ],
            });
        } else {
            return res.send({
                success: true,
                result: { like: 0, dislike: 0 },
                message: [
                    {
                        message: 'با موفقیت انجام شد',
                    },
                ],
            });
        }
    } catch (error) {
        return res.send({
            success: true,
            result: { like: 0, dislike: 0 },
            message: [
                {
                    message: 'با موفقیت انجام شد',
                },
            ],
        });
    }
});

// router.post('/answer', (req, res) => {
//     Comment.findById(req.body.id, (err, comment) => {
//         if (err) {
//             res.status(404).json({ message: 'یافت نشد' });
//         } else {
//             comment.answer = req.body.answer;
//             comment.save((err) => {
//                 if (err) {
//                     res.status(403).json({
//                         message: 'ارسال پاسخ با خطا مواجه شد',
//                     });
//                 } else {
//                     res.status(200).json({ message: 'پاسخ ثبت شد' });
//                 }
//             });
//         }
//     });
// });

module.exports = router;
