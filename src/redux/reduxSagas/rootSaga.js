import { all } from "redux-saga/effects";

import streamsSaga from "./sagas/AllLiveStreamSaga";
import instructorsSaga from "./sagas/instructorsSaga";
import { watchFetchHomeLiveStreams } from "./sagas/homeSagas/HomeLivestreamSaga";
import { watchFetchHomeFeaturedCourses } from "./sagas/homeSagas/HomeFeaturedCourseSaga";
import { watchFetchHomeNewestCourses } from "./sagas/homeSagas/HomeNewestCourseSaga";
import { watchFetchHomePopularInstructors } from "./sagas/homeSagas/HomePopularInstructorSaga";
import { watchFetchHomeStudentThoughts } from "./sagas/homeSagas/HomeStudentThoughtSaga";
import { watchFetchInsDashboardCards } from "./sagas/insDashboardSagas/InsDashboardCardSaga";
import { watchFetchInsDashboardCourses } from "./sagas/insDashboardSagas/InsDashboardCourseSaga";
import { watchFetchInsDashboardNews } from "./sagas/insDashboardSagas/InsDashboardNewSaga";
import { watchFetchLiveOutputLiveStreams } from "./sagas/liveOutputSagas/liveOutputLivestreamSagas";
import { watchFetchBlogs } from "./sagas/blogSagas/BlogSagas";
import { watchFetchEarningTable } from "./sagas/earningSagas/EarningTableSaga";
import { watchFetchEarningTopCountry } from "./sagas/earningSagas/EarningTopContrySaga";
import { watchFetchPayoutTable } from "./sagas/payoutSagas/PayoutTableSaga";
import { watchFetchCreditTable } from "./sagas/creditSagas/CreditTableSaga";
import searchresultSaga from "./sagas/searchresultSaga";
import { watchSaveCourses } from "./sagas/SaveCourseSaga";
import { watchAddToCart } from "./sagas/ShoppingCartSaga";
import courseSaga from "./sagas/MyCourseSaga/CourseSaga";
import coursesDSaga from "./sagas/CoursesDSaga";
import commentsSaga from "./sagas/CommentsSaga";
import watchFetchChatMessages from "./sagas/MessageSaga";
import MyCertificationsSaga from "./sagas/MyCertificationsSaga";
import statementSTSaga from "./sagas/StatementSTSaga";
import statementISSaga from "./sagas/StatementISSaga";
import { watchFetchPressNews } from "./sagas/pressSagas/PressNewsSaga";
import { watchFetchPressRelease } from "./sagas/pressSagas/PressReleaseSaga";
import upcommingCourseSaga from "./sagas/MyCourseSaga/UpcommingCourseSaga";
import myPurchaseCourseSaga from "./sagas/MyCourseSaga/MyPurchaseSaga";
import discountSaga from "./sagas/MyCourseSaga/DiscountSaga";
import { watchFetchNotifications } from "./sagas/NotificationSagas/NotificationInstructorSaga";
import { watchFetchNotificationsStudent } from "./sagas/NotificationSagas/NotificationStudentSaga";
import { watchLiveById } from "./sagas/liveOutputSagas/liveoutputLiveByIdSaga";
import { watchBlogDetail } from "./sagas/blogSagas/BlogDetailSaga";
import { watchFetchReview } from "./sagas/reviewSagas/reviewSaga";
import { watchInstructorById } from "./sagas/instructorSagas/instructorByIdSaga";
import { watchFeatureCoursesDetail } from "./sagas/coursesDetailSagas/featureCoursesDetailSaga";
import { watchNewestCoursesDetail } from "./sagas/coursesDetailSagas/newestCoursesDetailSaga";
import handleCreateCourse from "./sagas/CreateCourseSaga";

export default function* rootSaga() {
  yield all([
    streamsSaga(),
    instructorsSaga(),
    watchFetchHomeLiveStreams(),
    watchFetchHomeFeaturedCourses(),
    watchFetchHomeNewestCourses(),
    watchFetchHomePopularInstructors(),
    watchFetchHomeStudentThoughts(),
    watchFetchInsDashboardCards(),
    watchFetchInsDashboardCourses(),
    watchFetchInsDashboardNews(),
    watchFetchLiveOutputLiveStreams(),
    watchFetchBlogs(),
    watchFetchEarningTable(),
    watchFetchEarningTopCountry(),
    watchFetchPayoutTable(),
    watchFetchCreditTable(),
    watchSaveCourses(),
    watchAddToCart(),
    courseSaga(),
    searchresultSaga(),
    coursesDSaga(),
    commentsSaga(),
    watchFetchChatMessages(),
    MyCertificationsSaga(),
    statementSTSaga(),
    statementISSaga(),
    watchFetchPressNews(),
    watchFetchPressRelease(),
    upcommingCourseSaga(),
    myPurchaseCourseSaga(),
    discountSaga(),
    watchFetchNotifications(),
    watchFetchNotificationsStudent(),
    watchLiveById(),
    watchBlogDetail(),
    watchFetchReview(),
    watchInstructorById(),
    watchFeatureCoursesDetail(),
    watchNewestCoursesDetail(),
    handleCreateCourse(),
  ]);
}
