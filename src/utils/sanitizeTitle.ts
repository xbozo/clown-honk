export const sanitizeTitle = (title: string) => {
	let sanitizedTitle = title.toLowerCase()
	sanitizedTitle = sanitizedTitle.replace(/\s+/g, '-')
	sanitizedTitle = sanitizedTitle.replace(/[^a-z0-9-]/g, '')

	return sanitizedTitle
}
