const express = require('express');

const router = express.Router();

router.get('/getall', async (req, res) => {
    try {
        const categories = [
            {
                id: 1,
                name: 'فیزیک',
            },
            {
                id: 2,
                name: 'ریاضی',
            },
            {
                id: 3,
                name: 'شیمی',
            },
            {
                id: 4,
                name: 'کامپیوتر',
            },
            {
                id: 5,
                name: 'صنعت',
            },
            {
                id: 6,
                name: 'معماری',
            },
            {
                id: 7,
                name: 'برق',
            },
            {
                id: 8,
                name: 'بازار سهام',
            },
        ];

        return res.send({
            success: true,
            result: categories,
            message: [
                {
                    message: 'با موفقیت انجام شد',
                },
            ],
        });
    } catch (error) {
        return res.send({
            success: true,
            result: [],
            message: [
                {
                    message: 'با موفقیت انجام شد',
                },
            ],
        });
    }
});

module.exports = router;
