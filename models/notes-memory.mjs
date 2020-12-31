import { Note, AbstractNotesStore } from './Notes.mjs'

const notes = []

export class InMemmoryNotesStore extends AbstractNotesStore {
  async close() { }
  async update(key, title, body) {
    notes[key] = new Note(key, title, body)
    return notes[key]
  }
  async create(key, title, body) {
    notes[key] = new Note(key, title, body)
    return notes[key]
  }
  async read(key) {
    if (notes[key]) return notes[key]
    throw new Error(`Note ${key} does not exist`)
  }
  async destroy(key) {
    if (notes[key]) delete notes[key]
    throw new Error(`Note ${key} does not exist`)
  }
  async keylist() { return Object.keys(notes) }
  async count() { return notes.length }
}