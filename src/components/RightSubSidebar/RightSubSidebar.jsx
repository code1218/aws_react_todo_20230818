import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";

function RightSubSidebar({ children }) {
    return (
        <div css={S.SLayout}>
            {children}
        </div>
    );
}

export default RightSubSidebar;