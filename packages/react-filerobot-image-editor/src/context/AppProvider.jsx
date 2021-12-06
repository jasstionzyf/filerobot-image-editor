/** External Dependencies */
import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@scaleflex/ui/theme/hooks/use-theme';

/** Internal Dependencies */
import { useAppReducer } from 'hooks';
import { translate, updateTranslations } from 'utils/translator';
import appReducer from './appReducer';
import AppContext from './AppContext';
import getInitialAppState from './getInitialAppState';

const AppProvider = ({ children, config = {} }) => {
  const [state, dispatch] = useAppReducer(
    appReducer,
    getInitialAppState(config),
  );

  useEffect(() => {
    updateTranslations(config.translations, config.language);
  }, [config.useBackendTranslations, config.language, config.translations]);

  const theme = useTheme();
  const providedValue = useMemo(
    () => ({
      ...state,
      config,
      theme,
      dispatch,
      t: translate,
    }),
    [config, state],
  );

  return (
    <AppContext.Provider value={providedValue}>{children}</AppContext.Provider>
  );
};

AppProvider.defaultProps = {
  config: {},
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.instanceOf(Object),
};

export default AppProvider;