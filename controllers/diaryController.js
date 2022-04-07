import { DiaryPost } from '../models/DiaryPost.js'
import ObjectId from 'mongodb'
export class DiaryController {
  async getDiaryPosts(req, res, next) {
    try {
      const user = req.user
      const posts = await DiaryPost.find({})
        .populate('createdBy')
        .exec()

      let userPosts = []
      for (let i = 0; i < posts.length; i++) {
        let post = posts[i]

        if (post.createdBy._id.toString() === user._id.toString()) {
          userPosts.push(post)
        }
      }

      res.status(200).json({ message: userPosts })
    } catch (err) {
      res.status(500).json({ message: 'Server error' })
    }
  }

  async getDiaryPost(req, res, next) {
    try {
      const postId = req.params.id

      if (!postId) {
        return res.status(400).json({ message: 'Post ID required' })
      }

      const post = await DiaryPost.findById(postId)

      if (!post) {
        return res.status(404).json({ message: 'Post not found' })
      }

      res.status(200).json({ post: post })
    } catch (error) {
      res.status(500).json({ message: 'Server error' })
    }
  }

  async saveDiaryPost(req, res, next) {
    try {
      const { title, content, date, imageIds, events } = req.body
      const user = req.user

      if (!title) {
        return res.status(400).json({ message: 'Title required' })
      }

      const post = {
        title,
        content,
        events,
        imageIds,
        date,
        createdBy: user._id,
      }
      await new DiaryPost(post).save()

      res.status(200).json({ message: 'Success' })
    } catch (error) {
      res.status(500).json({ message: 'Server error' })
    }
  }

  async deleteDiaryPost(req, res, next) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({ message: 'ID is missing' })
      }

      const userId = req.user._id.toString()
      const post = await DiaryPost.findById(id)
      const postCreatedByUserId = post.createdBy.toString()

      if (userId !== postCreatedByUserId) {
        return res.status(403).json({ message: 'You did not create the post.' })
      } else {
        await DiaryPost.findByIdAndDelete(id)
        res.status(200).json({ message: 'Success' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' })
    }
  }

  async getImage(req, res, next) {
    const id = req.params.id

    if (!id) {
      return res.status(400).json({ message: 'Image ID required' })
    }

    try {
      await req.gfs.files.findOne({ _id: ObjectId(id) }, (err, file) => {
        if (!file || file.length === 0) {
          return res.status(404).json({ message: 'No file exists' })
        }

        if (
          file.contentType === 'image/jpeg' ||
          file.contentType === 'image/png'
        ) {
          const readStream = req.gfs.createReadStream(file._id)
          readStream.pipe(res)
        } else {
          res.status(404).json({ message: 'Not an image' })
        }
      })
    } catch (err) {
      res.status(500).json({ message: 'Server error' })
    }
  }

  async saveImages(req, res, next) {
    res
      .status(200)
      .json({ message: 'File uploaded successfully', info: req.files })
  }
}
