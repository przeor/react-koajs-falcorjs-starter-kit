import {v4} from 'node-uuid'
import {S3} from 'aws-sdk'
import Router from 'koa-router'

function S3KoaRouter ({bucket, region, signatureVersion, headers, ACL, prefix = '/s3'}) {
  if (!bucket) {
    throw new Error('You need to specify a bucket!')
  }

  const options = {}
  if (region) options.region = region
  if (signatureVersion) options.signatureVersion = signatureVersion

  const s3 = new S3(options)

  const router = new Router({prefix})

  router.get('/uploads/:fileName', (ctx, next) => {
    const {fileName} = ctx.params
    const conf = {
      Bucket: bucket,
      Key: fileName
    }
    s3.getSignedUrl('getObject', conf, (err, url) => {
      if (err) console.log('Error')
      ctx.redirect(url)
    })
  })

  router.get('/sign', (ctx, next) => {
    const {fileType, fileName} = ctx.query
    const Key = `${v4()}.${fileName.split('.').pop()}`
    const conf = {
      Bucket: bucket,
      Key,
      ContentType: fileType,
      Expires: 60,
      ACL: ACL || 'private'
    }
    s3.getSignedUrl('putObject', conf, (err, signedUrl) => {
      if (err) {
        console.log(err)
      }
      console.log(signedUrl)

      ctx.body = {
        signedUrl,
        publicUrl: `/s3/uploads/${Key}`,
        fileName
      }
    })
  })

  return router
}

export default S3KoaRouter
