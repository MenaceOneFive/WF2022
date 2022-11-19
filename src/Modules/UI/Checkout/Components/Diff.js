
export const diffInString = (diff) => {
    return `${diff}박 ${diff + 1}일`
}
export const getDiff = (ed, st) => {
    return (ed.diff(st, "day"))
}