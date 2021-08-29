import { ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { RoutesType } from '@/types/config/routes';

interface Props extends LinkProps {
  children: ReactNode
  href: RoutesType
}

export const Link = (props: Props) => {
  return (
    <NextLink {...props}>
      <a>{props.children}</a>
    </NextLink>
  )
}