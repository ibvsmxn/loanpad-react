import React from "react";

import { Alert } from "react-bootstrap";
import RiskNotice from "./RiskNotice";

export default LegalCapital => (
    <Alert>
        Capital at <RiskNotice />. Not protected by the FSCS. Past performance is not an indicator of future results.
    </Alert>
)