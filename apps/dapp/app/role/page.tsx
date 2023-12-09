import styles from './page.module.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Header , RoleManagement} from '@stablecoin-app/ui-elements';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { LeftNav } from '@stablecoin-app/ui-elements';

/* eslint-disable-next-line */
export interface OperateProps {}
export default function Index(props: OperateProps) {
  return (
    <div className={styles.page}>
      <Header />
      <div className="wrapper">
        <LeftNav />

        <div className="content-area">
          <div className={styles['heading-area']}>
            <h1>Role Mangement</h1>
          </div>
          <RoleManagement />
        </div>
      </div>
    </div>
  );
}
