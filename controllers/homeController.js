import express from 'express'

export class HomeController {
  async index(req, res, next) {
    return res.status(200).json({ message: 'Home' })
  }
}
