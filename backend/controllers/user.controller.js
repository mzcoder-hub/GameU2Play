import {
  find,
  findOne,
  create,
  update,
  deleteUserData,
} from '../models/user.model.js'
import { HttpException } from '../utils/HttpException.utils.js'
import { validationResult } from 'express-validator'

import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const resultMessage = (responsCode, status, message, data = '') => {
  if (data == '') {
    const result = {
      responsCode: responsCode,
      status: status,
      message: message,
    }

    return result
  } else {
    const result = {
      responsCode: responsCode,
      status: status,
      message: message,
      data: data,
    }
    return result
  }
}

/******************************************************************************
 *                              User Controller                               *
 ******************************************************************************/

const checkValidation = (req) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new HttpException(400, JSON.stringify(errors))
  }
}

// hash password if it exists
const hashPassword = async (req) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 8)
  }
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const sendVerificationMail = async (req) => {
  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'u2playofficial@gmail.com',
        pass: 'mediaesports2021',
      },
    })
  )

  const mailOptions = {
    from: 'Noreply U2play',
    to: `${req.email}`,
    subject: `This is Verification Code For U2Play Account`,
    html: `<!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <title>
        </title>
        <!--[if !mso]><!-- -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
          #outlook a { padding:0; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }
        </style>
        <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <!--[if lte mso 11]>
        <style type="text/css">
          .outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
@import url(https://fonts.googleapis.com/css?family=Cabin:400,700);
        </style>
      <!--<![endif]--
    <style type="text/css">
      @media only screen and (max-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
      }
    </style>
        <style type="text/css">
    @media only screen and (max-width:480px) {
      table.full-width-mobile { width: 100% !important; }
      td.full-width-mobile { width: auto !important; }
    }
        </style>
        <style type="text/css">.hide_on_mobile { display: none !important;} 
        @media only screen and (min-width: 480px) { .hide_on_mobile { display: block !important;} }
        .hide_section_on_mobile { display: none !important;} 
        @media only screen and (min-width: 480px) { 
            .hide_section_on_mobile { 
                display: table !important;
            }
            div.hide_section_on_mobile { 
                display: block !important;
            }
        }
        .hide_on_desktop { display: block !important;} 
        @media only screen and (min-width: 480px) { .hide_on_desktop { display: none !important;} }
        .hide_section_on_desktop { display: table !important;} 
        @media only screen and (min-width: 480px) { .hide_section_on_desktop { display: none !important;} }
          p, h1, h2, h3 {
              margin: 0px;
          
          a {
              text-decoration: none;
              color: inherit;
          
          @media only screen and (max-width:480px) 
            .mj-column-per-100 { width:100%!important; max-width:100%!important; }
            .mj-column-per-100 > .mj-column-per-75 { width:75%!important; max-width:75%!important; }
            .mj-column-per-100 > .mj-column-per-60 { width:60%!important; max-width:60%!important; }
            .mj-column-per-100 > .mj-column-per-50 { width:50%!important; max-width:50%!important; }
            .mj-column-per-100 > .mj-column-per-40 { width:40%!important; max-width:40%!important; }
            .mj-column-per-100 > .mj-column-per-33 { width:33.333333%!important; max-width:33.333333%!important; }
            .mj-column-per-100 > .mj-column-per-25 { width:25%!important; max-width:25%!important; 
            .mj-column-per-100 { width:100%!important; max-width:100%!important; }
            .mj-column-per-75 { width:100%!important; max-width:100%!important; }
            .mj-column-per-60 { width:100%!important; max-width:100%!important; }
            .mj-column-per-50 { width:100%!important; max-width:100%!important; }
            .mj-column-per-40 { width:100%!important; max-width:100%!important; }
            .mj-column-per-33 { width:100%!important; max-width:100%!important; }
            .mj-column-per-25 { width:100%!important; max-width:100%!important; }
        }</style>
      </head>
      <body style="background-color:#FFFFFF;">
      <div style="background-color:#FFFFFF;">
      <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="border:none;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
            <tr>
              <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
        <tbody>
          <tr>
            <td style="width:600px;">
      <img height="auto" src="https://s3-eu-west-1.amazonaws.com/topolio/uploads/6102811f49e1f/1627554474.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="600">
            </td>
          </tr>
        </tbody>
      </table>
              </td>
            </tr>
      </table>
      </div>
          <!--[if mso | IE]>
            </td>
        </tr>
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
            <tr>
              <td align="left" style="font-size:0px;padding:0px 15px 0px 15px;word-break:break-word;">
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;"><p style="font-family: Ubuntu, Helvetica, Arial;"><span style="font-size: 24px;">Hi ${
        req.first_name + ' ' + req.last_name
      },</span></p></div>
              </td>
            </tr>
      </table>
      </div>
          <!--[if mso | IE]>
            </td>
        </tr>
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
            <tr>
              <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;"><p style="font-family: Ubuntu, Helvetica, Arial;"><span style="font-size: 18px;">Terima kasih telah mendaftarkan akun anda.</span><br><span style="font-size: 18px;">Klik tombol dibawah untuk mengaktifkan akun anda:</span></p></div>
              </td>
            </tr>
      </table>
      </div>
          <!--[if mso | IE]>
            </td>
        </tr>
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
            <tr>
              <td align="center" vertical-align="middle" style="font-size:0px;padding:20px 20px 20px 20px;word-break:break-word;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:100%;line-height:100%;">
        <tr>
          <td align="center" bgcolor="#F4B740" role="presentation" style="border:none;border-radius:10px;cursor:auto;mso-padding-alt:15px 26px 15px 26px;background:#F4B740;" valign="middle">
            <a href="http://localhost:3000/auth/verifikasi/${
              req.verification_code
            }" style="display: inline-block; background: #F4B740; color: #14142B; font-family: Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: normal; line-height: 100%; margin: 0; text-decoration: none; text-transform: none; padding: 15px 26px 15px 26px; mso-padding-alt: 0px; border-radius: 10px;" target="_blank">
              Click me!
            </a>
          </td>
        </tr>
      </table>
              </td>
            </tr>
      </table>
      </div>
          <!--[if mso | IE]>
            </td>
        </tr>
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
            <tr>
              <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;"><p style="font-family: Ubuntu, Helvetica, Arial;"><span style="font-size: 18px;">Jika tombol tidak bekerja, klik link berikut ini</span><br><span style="text-decoration: underline;"><span style="font-size: 18px; color: #f4b740; text-decoration: underline;">http://localhost:3000/auth/verifikasi/${
        req.verification_code
      }</span></span></p></div>
    
              </td>
            </tr>
      </table>
      </div>
          <!--[if mso | IE]>
            </td>
        </tr>
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
            <tr>
              <td style="font-size:0px;padding:10px 10px;padding-top:10px;padding-right:10px;word-break:break-word;">
      <p style="font-family: Ubuntu, Helvetica, Arial; border-top: solid 1px #D9DBE9; font-size: 1; margin: 0px auto; width: 100%;">
      </p>
      <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #D9DBE9;font-size:1;margin:0px auto;width:580px;" role="presentation" width="580px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->
              </td>
            </tr>
      </table>
      </div>
          <!--[if mso | IE]>
            </td>
        </tr>
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
            <tr>
              <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;"><p style="font-family: Ubuntu, Helvetica, Arial; text-align: center;"><span style="font-size: 14px;">&copy; U2Play.com, All Rights Reserved.&nbsp;</span></p></div>
              </td>
            </tr>
      </table>
      </div>
          <!--[if mso | IE]>
            </td>
        </tr>
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
      <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
            <tr>
              <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;color:#000000;"><p style="font-family: Ubuntu, Helvetica, Arial; text-align: center;"><span style="color: #f4b740;">Contact Us</span> &bull; <span style="color: #f4b740;">Privacy Policy</span> &bull; <span style="color: #f4b740;">Terms and Conditions</span></p></div>
              </td>
            </tr>
      </table>
      </div>
          <!--[if mso | IE]></td>
        </tr>
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
      </div>
      </body>
    </html>`,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

const createUser = async (req, res, next) => {
  checkValidation(req)

  await hashPassword(req)
  const getEmailAddress = req.body.email
  const getPhoneNumber = req.body.phone_number
  const user = await findOne({ email: getEmailAddress })
  const phone_number = await findOne({ phone_number: getPhoneNumber })

  if (user) {
    res.send(resultMessage(400, 'warning', 'Email Already Exist'))
  } else if (phone_number) {
    res.send(resultMessage(400, 'warning', 'Phone Already Exist'))
  } else {
    req.body.verification_code = randomNumber(1000, 5000)

    const result = await create(req.body)

    if (!result) {
      throw new HttpException(500, 'Something went wrong')
    }

    // res.status(201).send({ result })
    sendVerificationMail(req.body)

    res.send(
      resultMessage(201, 'success', 'Pendaftaran Berhasil Silahkan Login !!!')
    )
  }
}

const updateUser = async (req, res, next) => {
  checkValidation(req)

  await hashPassword(req)

  const { confirm_password, ...restOfUpdates } = req.body

  // do the update query and get the result
  // it can be partial edit
  const result = await update(restOfUpdates, req.params.id)

  if (!result) {
    throw new HttpException(404, 'Something went wrong')
  }

  const { affectedRows, changedRows, info } = result

  const message = !affectedRows
    ? 'User not found'
    : affectedRows && changedRows
    ? 'User updated successfully'
    : 'Updated faild'

  res.send({ message, info })
}

const deleteUser = async (req, res, next) => {
  const result = await deleteUserData(req.params.id)
  if (!result) {
    throw new HttpException(404, 'User not found')
  }
  res.send('User has been deleted')
}

const getAllUsers = async (req, res, next) => {
  let userList = await find()
  if (!userList.length) {
    throw new HttpException(404, 'Users not found')
  }

  userList = userList.map((user) => {
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  })

  res.send(userList)
}

const getUserById = async (req, res, next) => {
  const user = await findOne({ uid: req.params.id })
  if (!user) {
    throw new HttpException(404, 'User not found')
  }

  const { password, ...userWithoutPassword } = user

  res.send(userWithoutPassword)
}

// const getUserByNickName = async (req, res, next) => {
//   const user = await findOne({ nickname: req.params.nickname })
//   if (!user) {
//     throw new HttpException(404, 'User not found')
//   }

//   const { password, ...userWithoutPassword } = user

//   res.send(userWithoutPassword)
// }

const getCurrentUser = async (req, res, next) => {
  const { password, ...userWithoutPassword } = req.currentUser

  res.send(userWithoutPassword)
}

const userLogin = async (req, res, next) => {
  checkValidation(req)

  const { email, password: pass } = req.body

  const user = await findOne({ email })

  if (!user) {
    throw new HttpException(401, "User Doesn't Exists")
  }

  const isMatch = await bcrypt.compare(pass, user.password)

  if (!isMatch) {
    throw new HttpException(401, 'Incorrect password!')
  }

  // user matched!
  const secretKey = process.env.SECRET_JWT || ''
  const token = jwt.sign({ user_id: user.uid.toString() }, secretKey, {
    expiresIn: '24h',
  })

  const { password, ...userWithoutPassword } = user

  res.send({ ...userWithoutPassword, token })
}

const verification = async (req, res, next) => {
  const email = req.body.email
  const getVerificationCode = req.params.id

  const user = await findOne({ email })

  if (getVerificationCode == user.verification_code) {
    const { password, ...restOfUpdates } = user
    restOfUpdates.status = 'active'

    // console.log(user.uid)
    const result = await update(restOfUpdates, user.uid)

    if (!result) {
      throw new HttpException(500, 'Something went wrong')
    }
    res.send(
      resultMessage(
        201,
        'success',
        'Akun anda Sudah Berhasil di Verifikasi !!!'
      )
    )
  } else {
    res.send(resultMessage(400, 'error', 'Kode Verifikasi Tidak Sama !!!'))
  }
}

/******************************************************************************
 *                               Export                                       *
 ******************************************************************************/
export {
  getAllUsers,
  getUserById,
  getCurrentUser,
  createUser,
  updateUser,
  deleteUser,
  userLogin,
  checkValidation,
  hashPassword,
  verification,
}
