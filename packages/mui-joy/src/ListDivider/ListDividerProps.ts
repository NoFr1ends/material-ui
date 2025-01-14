import * as React from 'react';
import { OverridableStringUnion, OverrideProps } from '@mui/types';
import { SxProps } from '../styles/types';

export type ListDividerSlot = 'root';

export interface ListDividerInsetOverrides {}

export interface ListDividerTypeMap<P = {}, D extends React.ElementType = 'li'> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * The empty space on the side(s) of the divider in a vertical list.
     *
     * For horizontal list (the nearest parent List has `row` prop set to `true`), only `inset="gutter"` affects the list divider.
     */
    inset?: OverridableStringUnion<
      'context' | 'gutter' | 'startDecorator' | 'startContent',
      ListDividerInsetOverrides
    >;
    /**
     * The component orientation.
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps;
  };
  defaultComponent: D;
}

export type ListDividerProps<
  D extends React.ElementType = ListDividerTypeMap['defaultComponent'],
  P = {
    component?: React.ElementType;
  },
> = OverrideProps<ListDividerTypeMap<P, D>, D>;

export interface ListDividerOwnerState extends ListDividerProps {
  /**
   * @internal
   * The internal prop for controlling CSS margin of the element.
   */
  'data-first-child'?: boolean;
  /**
   * @internal
   * The divider is wrapped by a horizontal list.
   */
  row: boolean;
}
