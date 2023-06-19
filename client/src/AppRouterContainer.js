import React,{Suspense,lazy} from 'react';
import Loading from './components/shared/loading';
import {Routes, Route} from 'react-router-dom'
import { AuthProvider } from './utils/auth';
import { RequireAuth } from './utils/requireAuth';

const LoginPage = lazy(() => import('./components/admin/pages/login'));
const FilterSearch = lazy(() => import('./components/website/pages/filterSearch/filterSearch'));
const ErrorPage = lazy(() => import('./components/website/pages/errorPage'));
const MainPage = lazy(() => import('./components/admin/pages/mainPage/mainPage'));
const FiltersPage = lazy(() => import('./components/admin/pages/filtersPage/filtersPage'));
const GeneralSettings = lazy(() => import('./components/admin/pages/generalSettings'));
const ThemeForm = lazy(() => import('./components/admin/pages/themeForm/themeForm'));

const AppRouterContainer = () => {

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
                        <ThemeForm />
                    </Suspense>
                </RequireAuth>
            }/>
        </Routes>
        </AuthProvider>
    )
}

export default AppRouterContainer