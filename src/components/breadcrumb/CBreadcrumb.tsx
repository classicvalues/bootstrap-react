import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CBreadcrumbProps extends HTMLAttributes<HTMLOListElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
}

export const CBreadcrumb = forwardRef<HTMLOListElement, CBreadcrumbProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('breadcrumb', className)
    return (
      <nav aria-label="breadcrumb">
        <ol className={_className} {...rest} ref={ref}>
          {children}
        </ol>
      </nav>
    )
  },
)

CBreadcrumb.displayName = 'CBreadcrumb'