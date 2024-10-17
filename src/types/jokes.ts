export interface ErrorJokeResponse {
  "error": boolean
  "internalError": boolean
  "code": number
  "message": string
  "causedBy": string[]
  "additionalInfo": string
  "timestamp": number
}

export interface JokeFlags {
  "nsfw": boolean
  "religious": boolean
  "political": boolean
  "racist": boolean
  "sexist": true
  "explicit": boolean
}

export interface JokeResponse {
  "error": boolean
  "category": string
  "type": string
  "setup": string
  "delivery": string
  "flags": JokeFlags
  "id": number
  "safe": boolean
  "lang": string
}

export interface Joke extends JokeResponse {
  isLiked: boolean
  createdAt: number
}
