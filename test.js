const issues = [
    {
        code: 'invalid_type',
        expected: 'string',
        received: 'undefined',
        path: [Array],
        message: 'specialization name is required'
    }
]

const res = issues[0].path.map((issues) => issues.path)
console.log(res);