import { BigNumber } from 'ethers'

export const MaxUint128 = BigNumber.from(2).pow(128).sub(1)

export enum FeeAmount {
  ONE = 100,
  LOW = 500,
  MEDIUM = 500,
  HIGH = 500,
}

export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.ONE]: 1,
  [FeeAmount.LOW]: 60,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 60,
}
