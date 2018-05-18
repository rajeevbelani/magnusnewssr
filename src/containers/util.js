export function getBlogTypeString (post) {
  console.log(`Inside Get Blog Type String :: ${post}`)
  if (post.type === 'patient_stories') { return 'Patient Stories' }
  else if (post.type === 'treatment_description') { return '' }
  else if (post.type === 'did_you_know') { return 'DID YOU KNOW?' }
  else if (post.type === 'doctor_quote') { return 'Doctor Says' }
  else if (post.type === 'information_snippet') { return 'Information' }
  return 'Featured Blog'
}

export function getMappedTypeForPost (post) {
  if ((post.type === 'did_you_know') || (post.type === 'information_snippet')) { return 'TYPE_SOCIAL' }
  else if (post.type === 'doctor_quote') { return 'TYPE_QUOTE' }
  return 'TYPE_BLOG'
}

// blog, patient_stories, patient_snippets, doctor_testimonials, doctor_quote, doctor_interview, did_you_know, privacy_policy, terms_of_use, treatment_description


export function getBlogHeading (post) {
  if (post.title !== null) { return post.title }
  return ' '
}

export function getBlogShortDescription (post) {
  if (post.content !== null) { return post.content.brief.md }
  return ' '
}

export function getBlogDescription (post) {
  console.log(`Inside Get blog descrption :: ${JSON.stringify(post)}`)
  if (post.content !== null) { return post.content.description.md }
  return ' '
}

export function getBlogLink (post) {
  console.log(`Blog Link ::  ${post.type}`)
  if (post.type === 'patient_stories') { return `/patientstories/post/${post.slug}/` } else if (post.type === 'treatment_description') { return `/treatments/treatment/${post.slug}/` }
  else if (post.type === 'news_and_events') { return `/newsevents/post/${post.slug}/` }
  return `/blog/post/${post.slug}/`
}

export function getBlogFullLink (post) {
  console.log(`Inside getBlogFullLink  ::  ${post.type}`)
  if (post.type === 'patient_stories') { return `http://www.magnusmedi.com/patientstories/post/${post.slug}/` } else if (post.type === 'treatment_description') { return `http://www.magnusmedi.com/treatments/treatment/${post.slug}/` }
  return `http://www.magnusmedi.com/blog/post/${post.slug}/`
}

export function getBlogImage (post) {
  // console.log(`GET BLOG IMAGE :: image  ::  ${post.image}`)
  if (post.image !== null && post.image !== undefined) { return post.image.url }
  return ''
}

export function getBlogAuthor (post) {
  if (post.author !== null && post.author !== undefined) { return post.author.name.first + post.author.name.last }
  return 'Magnus Admin'
}

export function getBlogAuthorDescription (post) {
  console.log(`Blog author :: ${JSON.stringify(post)}`)
  if (post.author !== null && post.author !== undefined) {
    if (post.author.shortDescription !== null && post.author.shortDescription !== undefined) { return post.author.shortDescription.html }
  }
  return ''
}

export function getNextBlogTitle (post) {
  console.log(`Next Blog Title ::  ${JSON.stringify(post)}`)
  if (post.nextPost !== null && post.nextPost !== undefined) {
    return post.nextPost.title
  }
  return ''
}
