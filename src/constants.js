export const SETTING = Object.freeze({
  min_lotto_number: 1,
  size: 6,
  max_lotto_number: 45,
  lotto_cost: 1000,
});

export const MESSAGE = Object.freeze({
  input_cost: '구입금액을 입력해 주세요.',
  sell: '개를 구매했습니다.',
  input_prize: '당첨 번호를 입력해 주세요.',
  input_bonus: '보너스 번호를 입력해 주세요.',
  prize_stats: '당첨 통계',
  total_return: (num) => `총 수익률은 ${num}입니다.`,
});

export const MATCH = Object.freeze({
  three_match: (match) => `3개 일치 (5,000원) - ${match}개`,
  four_match: (match) => `4개 일치 (50,000원) - ${match}개`,
  five_match: (match) => `5개 일치 (1,500,000원) - ${match}개`,
  five_bonus_match: (match) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${match}개`,
  six_match: (match) => `6개 일치 (2,000,000,000원) - ${match}개`,
});

export const PREFIX = Object.freeze({
  error: '[ERROR]',
});

export const ERROR_MESSAGE = Object.freeze({
  not_number: `${PREFIX.error} 숫자가 아닙니다.`,
  not_natural_number: `${PREFIX.error} 자연수가 아닙니다.`,
  not_lotto_cost: `${PREFIX.error} ${SETTING.lotto_cost} 단위의 금액을 입력하세요.`,
  not_six_numbers: `${PREFIX.error} 쉼표를 기준으로 ${SETTING.input_length}개의 숫자를 입력하세요.`,
  not_range: `${PREFIX.error} ${SETTING.min_lotto_number} 이상 ${SETTING.max_lotto_number} 이하의 숫자를 입력하세요.`,
  not_unique: `${PREFIX.error} 중복된 숫자가 존재합니다.`,
});