import { Button, Box, TextField, Select, MenuItem, FormHelperText, InputLabel, } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import { LoadingButton } from '@mui/lab';
import React, { FC } from 'react';
import productsApi from '../api/products';





const PostForm: FC = () => {
    const navigate = useNavigate();

    const [titleErrText, setTitleErrText] = React.useState<string>('')
    const [gradeErrText, setGradeErrText] = React.useState<string>('')
    const [departmentErrText, setDepartmentErrText] = React.useState<string>('')
    const [subjectErrText, setSubjectErrText] = React.useState<string>('')
    const [yearErrText, setYearErrText] = React.useState<string>('')
    const [semesterErrText, setSemesterErrText] = React.useState<string>('')
    const [descriptionErrText, setDescriptionErrText] = React.useState<string>('')

    const [loading, setLoading] = React.useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTitleErrText('');
        setGradeErrText('');
        setDepartmentErrText('');
        setSubjectErrText('');
        setYearErrText('');
        setSemesterErrText('');
        setDescriptionErrText('');

        //フォームの値を取得
        const data = await new FormData(e.currentTarget);
        console.log(data)
        const title = (data.get('title') as string).trim();
        const grade = data.get('grade');
        const department = (data.get('department') as string);
        const subject = (data.get('subject') as string).trim();
        const year = (data.get('year') as string);
        const semester = (data.get('semester') as string);
        const description = (data.get('description') as string);

        console.log(title)
        console.log(grade)
        console.log(department)
        console.log(subject)
        console.log(year)
        console.log(semester)
        console.log(description)

        let error = false;

        if (title === '') {
            error = true;
            setTitleErrText('タイトルを入力してください')
        }
        if (grade === '') {
            error = true;
            setGradeErrText('学年を入力してください')
        }
        if (department === '') {
            error = true;
            setDepartmentErrText('学科を入力してください')
        }
        if (subject === '') {
            error = true;
            setSubjectErrText('教科を入力してください')
        }
        if (year === '') {
            error = true;
            setYearErrText('年度を入力してください')
        }
        if (semester === '') {
            error = true;
            setSemesterErrText('学期を入力してください')
        }
        if (description === '') {
            error = true;
            setDescriptionErrText('説明を入力してください')
        }
        if (error) {
            return;
        }

        setLoading(true);
        //登録APIを叩く
        try {
            const res = await productsApi.post({
                title,
                grade,
                department,
                subject,
                year,
                semester,
                description,
            });
            setLoading(false);
            console.log(res)
            console.log("投稿成功！")
            navigate('/success-post')
        } catch (err: any) {
            console.log(err)
            const errors = err.data.error;
            console.log(errors);
            if (errors) {
                errors.forEach((error: any) => {
                    if (error.path === 'title') {
                        setTitleErrText(error.msg);
                    }
                    if (error.path === 'grade') {
                        setGradeErrText(error.msg);
                    }
                    if (error.path === 'department') {
                        setDepartmentErrText(error.msg);
                    }
                    if (error.path === 'subject') {
                        setSubjectErrText(error.msg);
                    }
                    if (error.path === 'year') {
                        setYearErrText(error.msg);
                    }
                    if (error.path === 'semester') {
                        setSemesterErrText(error.msg);
                    }
                    if (error.path === 'description') {
                        setDescriptionErrText(error.msg);
                    }
                })
            }
            setLoading(false);
        }
    }
    return (
        <Box m={8} mt={5} component="form" onSubmit={handleSubmit} noValidate>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3>投稿してみよう！！</h3>
                <TextField
                    id='title'
                    label="タイトル"
                    fullWidth
                    margin='normal'
                    InputLabelProps={{ shrink: true }}
                    name='title'
                    type='text'
                    required
                    helperText={titleErrText}
                    error={titleErrText !== ''}
                    disabled={loading}
                />
                <Select
                    id='grade'
                    label="学年"
                    fullWidth
                    name='grade'
                    defaultValue={1}
                    required
                    error={gradeErrText !== ''}
                    disabled={loading}
                >
                    <MenuItem value={1}>1年</MenuItem>
                    <MenuItem value={2}>2年</MenuItem>
                    <MenuItem value={3}>3年</MenuItem>
                    <MenuItem value={4}>4年</MenuItem>
                    <MenuItem value={5}>5年</MenuItem>
                </Select>
                <FormHelperText>※学年は1年、2年、3年、4年、5年のいずれかを選択してください</FormHelperText>
                <Select
                    id='department'
                    label="学科"
                    fullWidth
                    name='department'
                    defaultValue="M科"
                    required
                    error={departmentErrText !== ''}
                    disabled={loading}
                >
                    <MenuItem value="M科">M科</MenuItem>
                    <MenuItem value="E科">E科</MenuItem>
                    <MenuItem value="I科">I科</MenuItem>
                    <MenuItem value="C科">C科</MenuItem>
                    <MenuItem value="A科">A科</MenuItem>
                </Select>
                <FormHelperText>※学科はM科、E科、I科、C科、A科のいずれかを選択してください</FormHelperText>
                <TextField
                    id='subject'
                    label="教科"
                    fullWidth
                    margin='normal'
                    name='subject'
                    type='text'
                    required
                    InputLabelProps={{ shrink: true }}
                    helperText={subjectErrText}
                    error={subjectErrText !== ''}
                    disabled={loading}
                />
                <Select
                    id='year'
                    label="年度"
                    fullWidth
                    name='year'
                    defaultValue={2023}
                    required
                    error={yearErrText !== ''}
                    disabled={loading}
                >
                    <MenuItem value={2023}>2023年度</MenuItem>
                    <MenuItem value={2022}>2022年度</MenuItem>
                    <MenuItem value={2021}>2021年度</MenuItem>
                    <MenuItem value={2020}>2020年度</MenuItem>
                    <MenuItem value={2019}>2019年度</MenuItem>
                </Select>
                <FormHelperText>※年度は2023年度、2022年度、2021年度、2020年度、2019年度のいずれかを選択してください</FormHelperText>
                <Select
                    id='semester'
                    label="学期"
                    fullWidth
                    name='semester'
                    type='text'
                    defaultValue="前期中間"
                    required
                    error={semesterErrText !== ''}
                    disabled={loading}
                >
                    <MenuItem value="前期中間">前期中間</MenuItem>
                    <MenuItem value="前期期末">前期期末</MenuItem>
                    <MenuItem value="後期中間">後期中間</MenuItem>
                    <MenuItem value="後期期末">後期期末</MenuItem>
                </Select>
                <FormHelperText>※学期は前期中間、前期期末、後期中間、後期期末のいずれかを選択してください</FormHelperText>
                <TextField
                    id='description'
                    label="説明"
                    fullWidth
                    margin='normal'
                    name='description'
                    defaultValue="商品の説明を入力してください"
                    type='text'
                    multiline
                    rows={8}
                    required
                    InputLabelProps={{ shrink: true }}
                    helperText={descriptionErrText}
                    error={descriptionErrText !== ''}
                    disabled={loading}
                />
                <LoadingButton
                    variant='contained'
                    type='submit'
                    loading={loading}
                >
                    次へ
                </LoadingButton>
            </Box >
        </Box>
    )
}

export default PostForm