import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import type { CompanyKeyMetrics } from "../../company";
import Spinner from "../Spinners/Spinner";


type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCap,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatio,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.returnOnEquity,
  },
  {
    label: "Cash Per Share",
    render: (company: CompanyKeyMetrics) => company.returnOnAssets,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatio,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.returnOnEquity,
  },
];

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  useEffect(() => {
    const getCompanyKeyRatios = async () => {
      const value = await getKeyMetrics(ticker);
      setCompanyData(value?.data[0]);
    };
    getCompanyKeyRatios();
  }, []);
  return (
    <>
      {companyData ? (
        <>
          <RatioList config={tableConfig} data={companyData} />
        </>
      ) : (
        <Spinner/>
      )}
    </>
  );
};

export default CompanyProfile;