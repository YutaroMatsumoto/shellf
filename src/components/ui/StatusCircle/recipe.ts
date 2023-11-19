import { cva } from 'styled-system/css'

export const statusCircle = cva({
	// TODO: marginはSpacerで入れるようにする
	base: { width: '20px', height: '20px', marginRight: '20px', borderRadius: '50%' },
	variants: {
		status: {
			success: { bg: 'green.500' },
			failure: { bg: 'red.500' }
		}
	}
})
