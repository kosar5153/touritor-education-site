import * as Yup from "yup";

const fullNameRegExp = "^[آ-یa-zA-Z0-9 ]+$";
const phoneRegExp = "^09(1[0-9]|3[1-9]|2[1-9]|0[1-9])-?[0-9]{3}-?[0-9]{4}";

const nationalIdRegEx = "^[0-9]{10}$";
export const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "نام کاربری حداقل 3 کاراکتر")
    .matches(
      fullNameRegExp,
      "فقط حروف فارسی، انگلیسی ، اعداد وکاراکتر خاص وارد شود"
    )
    .required("نام کاربری الزامی است"),
  email: Yup.string()
    .email("ایمیل مورد نظر نامعتبر یا موجود میباشد")
    .required("ایمیل الزامی میباشد"),
  password: Yup.string()
    .min(8, "حداقل 8 کاراکتر")
    .required("رمز عبور الزامی میباشد"),
  phoneNumber: Yup.string()
    .length(11, "تلفن صحیح نمیباشد")
    .matches(phoneRegExp, " شماره ملی صحیح نمیباشد")
    .required("تلفن الزامی میباشد"),
  nationalId: Yup.string()
    .matches(nationalIdRegEx, " شماره ملی صحیح نمیباشد")
    .required("شماره ملی الزامی میباشد "),
});

// login yup roles
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل مورد نظر نامعتبر یا موجود میباشد")
    .required("ایمیل الزامی میباشد"),
  password: Yup.string()
    .min(8, "حداقل 8 کاراکتر")
    .required("رمز عبور الزامی میباشد"),
});

// forgetPass yup roles
export const forgetPassSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل مورد نظر نامعتبر یا موجود میباشد")
    .required("ایمیل الزامی میباشد"),
});
