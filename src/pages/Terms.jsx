import React from 'react'
import { Footer } from '../components'
import terms from '../data/term.md?raw'

const INLINE = /(\*\*[^*]+\*\*|_[^_]+_)/g

const renderInline = (text) => text.split(INLINE).map((part, index) => {
    if (/^\*\*.+\*\*$/.test(part)) return <strong key={index} className='font-semibold text-dark'>{part.slice(2, -2)}</strong>
    if (/^_.+_$/.test(part)) return <em key={index}>{part.slice(1, -1)}</em>
    return part
})

// Covers what term.md uses: headings, paragraphs, nested "-" lists, bold, italic, rules
const parseMarkdown = (source) => {
    const blocks = []
    let paragraph = []
    let list = null

    const flushParagraph = () => {
        if (paragraph.length) blocks.push({ type: 'p', lines: paragraph })
        paragraph = []
    }
    const flushList = () => {
        if (list) blocks.push(list)
        list = null
    }

    source.split(/\r?\n/).forEach((line) => {
        const item = line.match(/^(\s*)- (.*)$/)
        if (item) {
            flushParagraph()
            list ??= { type: 'list', items: [] }
            list.items.push({ nested: item[1].length >= 2, text: item[2] })
            return
        }
        flushList()

        const heading = line.match(/^(#{1,2}) (.*)$/)
        if (!line.trim() || line.trim() === '---' || heading) flushParagraph()
        if (heading) blocks.push({ type: `h${heading[1].length}`, text: heading[2] })
        else if (line.trim() && line.trim() !== '---') paragraph.push(line.trim())
    })
    flushParagraph()
    flushList()
    return blocks
}

const BLOCKS = parseMarkdown(terms)

const renderBlock = (block, index) => {
    switch (block.type) {
        // The page renders its own title
        case 'h1':
            return null
        case 'h2':
            return <h2 key={index} className='mt-16 mb-5 font-display text-3xl leading-[1.1] text-dark md:text-4xl'>{block.text}</h2>
        case 'list':
            return (
                <ul key={index} className='mb-5 flex list-disc flex-col gap-2 pl-5 marker:text-dark/40'>
                    {block.items.map((item, itemIndex) => (
                        <li key={itemIndex} className={item.nested ? 'ml-5 list-[circle]' : ''}>{renderInline(item.text)}</li>
                    ))}
                </ul>
            )
        default:
            return (
                <p key={index} className='mb-5'>
                    {block.lines.map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                            {lineIndex > 0 && <br />}
                            {renderInline(line)}
                        </React.Fragment>
                    ))}
                </p>
            )
    }
}

const Terms = () => {
    return (
        <div className='bg-light'>
            <main className='grid grid-cols-1 gap-12 px-5 pt-28 pb-32 md:grid-cols-12 md:px-10 md:pt-24 md:pb-48'>
                <h1 className='font-display text-6xl leading-none tracking-tight md:col-span-4 md:text-7xl'>Terms of Service</h1>
                <article className='font-text text-sm leading-relaxed text-dark/80 md:col-span-7 md:col-start-6 [&>h2:first-of-type]:mt-0'>
                    {BLOCKS.map(renderBlock)}
                </article>
            </main>
            <Footer />
        </div>
    )
}

export default Terms
