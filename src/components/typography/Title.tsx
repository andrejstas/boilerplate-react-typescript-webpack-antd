import React, { FC } from 'react'

import { Typography } from 'antd'

const { Title } = Typography

const TitleComponent: FC = ({ children }) => <Title>{children}</Title>

export { TitleComponent }
