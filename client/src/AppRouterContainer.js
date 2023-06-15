import React,{Suspense,lazy} from 'react';
import Loading from './components/general/loading';
import {Routes, Route} from 'react-router-dom'
import { AuthProvider } from './utils/auth';
import { RequireAuth } from './utils/requireAuth';

const LoginPage = lazy(() => import('./pages/admin/login'));
const FilterSearch = lazy(() => import('./pages/website/filterSearch'));
const ErrorPage = lazy(() => import('./pages/website/errorPage'));
const MainPage = lazy(() => import('./pages/admin/mainPage'));
const FiltersPage = lazy(() => import('./pages/admin/filtersPage'));
const GeneralSettings = lazy(() => import('./pages/admin/generalSettings'));
const ThemeForm = lazy(() => import('./pages/admin/themeForm'));

const AppRouterContainer = ({colorOptions,setColorOptions}) => {

    return(
        <AuthProvider>
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<Loading/>}>
                <FilterSearch/>
                </Suspense>
            } />
            <Route path="*" element={
                <Suspense fallback={<Loading/>}>
                <ErrorPage />
            </Suspense>
            } />
            <Route path="/admin" element={
                <RequireAuth>
                   <Suspense fallback={<Loading/>}><MainPage /></Suspense>
                </RequireAuth>
            }/>
            <Route path="/admin/login" element={
                <Suspense fallback={<Loading/>}><LoginPage /></Suspense>
            } />
            <Route path="/admin/filters" element={
                <RequireAuth>
                    <Suspense fallback={<Loading/>}><FiltersPage /></Suspense>
                </RequireAuth>
            } />
            <Route path="/admin/general" element={
                <RequireAuth>
                    <Suspense fallback={<Loading/>}><GeneralSettings /></Suspense>
                </RequireAuth>
            } />
            <Route path="/admin/theme" element={
                <RequireAuth>
                    <Suspense fallback={<Loading/>}>
                        <ThemeForm
                            colorOptions={colorOptions}
                            setColorOptions={setColorOptions}
                            />
                    </Suspense>
                </RequireAuth>
            }/>
        </Routes>
        </AuthProvider>
    )
}

export default AppRouterContainer