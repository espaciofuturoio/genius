import { randChoice } from './utils'

export default function randomPallette(): string[] {
  const pallettes = [
    ['#2F0668', '#41009a', '#6f05ff', '#7e1dff', '#a25eff', '#C49AFC', '#CEA9FF', '#D4B7FC', '#D9BFFC', '#E7D5FF'],
    ['#042840', '#164362', '#1E6591', '#4E8DC0', '#96BFEB', '#B5D6F9', '#C1DFFF', '#CDE5FF', '#DBECFF', '#EAF4FF'],
    ['#44110E', '#69241D', '#993526', '#CC592C', '#E07736', '#EDB168', '#F4BF7F', '#F9D09E', '#FFDCB2', '#FFEAD0'],
    ['#182E00', '#264700', '#356300', '#6E9A3B', '#B5D97F', '#CBEDA0', '#D5F1B1', '#E1F7C5', '#ECFBD9', '#FBFFF5'],
    ['#2F0668', '#41009a', '#6f05ff', '#7e1dff', '#a25eff', '#C49AFC', '#CEA9FF', '#D4B7FC', '#D9BFFC', '#E7D5FF'],
    // ['#16191E', '#434554', '#535468', '#6B6C82', '#8889A1', '#ADAEC7', '#BEBFD6', '#C5C6DF', '#D1D2E8', '#DFE0EF'],
    // ['#21221F', '#3A3B36', '#4E4F49', '#686962', '#7C7D77', '#A4A69B', '#B5B6AF', '#C8C8C2', '#D7D7D2', '#F2F2F1'],
  ]
  return randChoice(pallettes)
}
