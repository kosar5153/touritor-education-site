const TermServices = require('../services/term.service');
const ResponseResult = require('../api_models/ResponseResult');
const ResponseMessage = require('../api_models/ResponseMessage');
const ResponseMessageType = require('../api_models/ResponseMessageType');
const TermValidator = require('../validators/term.validator');

const termServices = new TermServices();
const termValidator = new TermValidator();

class TermManagementController {
    //createTerm-------------------------------------------------------------
    async createTerm(req, res) {
        const { error, value } = termValidator.validateTerm(req.body);

        let response;
        let httpMethodCode;

        if (error) {
            const errors = [];
            error.details.forEach((err) => {
                errors.push(
                    new ResponseMessage({
                        eventId: 400,
                        messageId: 1,
                        type: ResponseMessageType.error,
                        message: err.message,
                    })
                );
            });

            response = new ResponseResult({
                success: false,
                message: errors,
            });
            httpMethodCode = 400;
        } else {
            const result = await termServices.createTermService(value);

            response = new ResponseResult({
                success: result['success'],
                result: result['result'],
                message: result['message'],
            });

            httpMethodCode = result.httpMethodCode;
        }
        res.status(httpMethodCode).send(response);
    }

    //getAllTerms------------------------------------------------------------
    async getAllTerms(req, res) {
        const result = await termServices.getAllTermsService();

        const response = new ResponseResult({
            success: result['success'],
            result: result['result'],
            message: result['message'],
        });

        const httpMethodCode = result.httpMethodCode;

        res.status(httpMethodCode).send(response);
    }

    async getAllTermPagination(req, res) {
        const query = req.query;
        const pagenumber = parseInt(query.pagenumber);
        const pagesize = parseInt(query.pagesize);

        let response;
        let httpMethodCode;
        if (!pagenumber || !pagesize) {
            response = new ResponseResult({
                success: false,
                result: 'Error',
                message: 'شماره پیج و اندازه پیج اجباری است',
            });

            httpMethodCode = 400;
        } else {
            const result = await termServices.getAllTermPagination(
                pagenumber,
                pagesize
            );

            response = new ResponseResult({
                success: result['success'],
                result: result['result'],
                message: result['message'],
            });

            httpMethodCode = result.httpMethodCode;
        }

        res.status(httpMethodCode).send(response);
    }

    //getTermById------------------------------------------------------------
    async getTermById(req, res) {
        const id = req.params.id;

        const result = await termServices.getTermByIdService(id);

        const response = new ResponseResult({
            success: result['success'],
            result: result['result'],
            message: result['message'],
        });

        const httpMethodCode = result.httpMethodCode;

        res.status(httpMethodCode).send(response);
    }

    //updateTermById---------------------------------------------------------
    async updateTermById(req, res) {
        const id = req.params.id;
        const { error, value } = termValidator.validateTerm(req.body);

        let response;
        let httpMethodCode;

        if (error) {
            const errors = [];
            error.details.forEach((err) => {
                errors.push(
                    new ResponseMessage({
                        eventId: 400,
                        messageId: 1,
                        type: ResponseMessageType.error,
                        message: err.message,
                    })
                );
            });

            response = new ResponseResult({
                success: false,
                message: errors,
            });
            httpMethodCode = 400;
        } else {
            console.log('before');
            const result = await termServices.updateTermByIdService(id, value);
            console.log('after');

            response = new ResponseResult({
                success: result['success'],
                result: result['result'],
                message: result['message'],
            });

            httpMethodCode = result.httpMethodCode;
        }
        res.status(httpMethodCode).send(response);
    }

    //deleteTermById---------------------------------------------------------
    async deleteTermById(req, res) {
        const id = req.params.id;
        const result = await termServices.deleteTermByIdService(id);
        let response;
        let httpMethodCode;
        response = new ResponseResult({
            success: result['success'],
            result: result['result'],
            message: result['message'],
        });

        httpMethodCode = result.httpMethodCode;

        res.status(httpMethodCode).send(response);
    }

    //addStudentToTerm------------------------------------------------------
    async addStudentToTerm(req, res) {
        const studentId = req.params.id;
        const { courseId } = req.body;
        const termId = courseId;
        const { error } = termValidator.validateAssignStudentToTerm(req.body);
        const termDetail = await termServices.getTermByIdService(termId);
        let response;
        let httpMethodCode;

        if (termDetail['result'].capacity === 0) {
            response = new ResponseResult({
                success: false,
                message: {
                    message: 'ظرفیت پر است',
                },
            });
            httpMethodCode = 400;
        } else if (error) {
            const errors = [];
            error.details.forEach((err) => {
                errors.push(
                    new ResponseMessage({
                        eventId: 400,
                        messageId: 1,
                        type: ResponseMessageType.error,
                        message: err.message,
                    })
                );
            });

            response = new ResponseResult({
                success: false,
                message: errors,
            });
            httpMethodCode = 400;
        } else {
            const res = await termServices.addStudentToTerm(termId, studentId);

            response = new ResponseResult({
                success: res['success'],
                result: res['result'],
                message: res['message'],
            });

            httpMethodCode = res.httpMethodCode;
        }
        res.status(httpMethodCode).send(response);
    }

    //removeStudentFromTerm-------------------------------------------------
    async removeStudentFromTerm(req, res) {
        const studentId = req.params.id;
        const { courseId } = req.body;
        const termId = courseId;
        const { error } = termValidator.validateAssignStudentToTerm(req.body);

        let response;
        let httpMethodCode;

        if (error) {
            const errors = [];
            error.details.forEach((err) => {
                errors.push(
                    new ResponseMessage({
                        eventId: 400,
                        messageId: 1,
                        type: ResponseMessageType.error,
                        message: err.message,
                    })
                );
            });

            response = new ResponseResult({
                success: false,
                message: errors,
            });
            httpMethodCode = 400;
        } else {
            const res = await termServices.removeStudentFromTerm(
                termId,
                studentId
            );

            response = new ResponseResult({
                success: res['success'],
                result: res['result'],
                message: res['message'],
            });

            httpMethodCode = res.httpMethodCode;
        }
        res.status(httpMethodCode).send(response);
    }
}
module.exports = TermManagementController;
