# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 10, 2024 12:28:32
# Database: sqlite:////tmp/tmp.hriCNBWTIW/MySchool/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class School(SAFRSBaseX, Base):
    """
    description: Stores information about schools.
    """
    __tablename__ = 'schools'
    _s_collection_name = 'School'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    address = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    CourseList : Mapped[List["Course"]] = relationship(back_populates="school")
    StudentList : Mapped[List["Student"]] = relationship(back_populates="school")
    TeacherList : Mapped[List["Teacher"]] = relationship(back_populates="school")



class Course(SAFRSBaseX, Base):
    """
    description: Stores information about courses.
    """
    __tablename__ = 'courses'
    _s_collection_name = 'Course'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(Text)
    school_id = Column(ForeignKey('schools.id'))

    # parent relationships (access parent)
    school : Mapped["School"] = relationship(back_populates=("CourseList"))

    # child relationships (access children)
    EnrollmentList : Mapped[List["Enrollment"]] = relationship(back_populates="course")



class Student(SAFRSBaseX, Base):
    """
    description: Stores information about students.
    """
    __tablename__ = 'students'
    _s_collection_name = 'Student'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    dob = Column(DateTime)
    school_id = Column(ForeignKey('schools.id'))

    # parent relationships (access parent)
    school : Mapped["School"] = relationship(back_populates=("StudentList"))

    # child relationships (access children)
    EnrollmentList : Mapped[List["Enrollment"]] = relationship(back_populates="student")



class Teacher(SAFRSBaseX, Base):
    """
    description: Stores information about teachers.
    """
    __tablename__ = 'teachers'
    _s_collection_name = 'Teacher'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    hire_date = Column(DateTime)
    school_id = Column(ForeignKey('schools.id'))

    # parent relationships (access parent)
    school : Mapped["School"] = relationship(back_populates=("TeacherList"))

    # child relationships (access children)



class Enrollment(SAFRSBaseX, Base):
    """
    description: Stores information about student enrollments in courses.
    """
    __tablename__ = 'enrollments'
    _s_collection_name = 'Enrollment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    course_id = Column(ForeignKey('courses.id'), nullable=False)
    student_id = Column(ForeignKey('students.id'), nullable=False)
    enrollment_date = Column(DateTime)

    # parent relationships (access parent)
    course : Mapped["Course"] = relationship(back_populates=("EnrollmentList"))
    student : Mapped["Student"] = relationship(back_populates=("EnrollmentList"))

    # child relationships (access children)
    GradeList : Mapped[List["Grade"]] = relationship(back_populates="enrollment")



class Grade(SAFRSBaseX, Base):
    """
    description: Stores grades assigned to students.
    """
    __tablename__ = 'grades'
    _s_collection_name = 'Grade'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    enrollment_id = Column(ForeignKey('enrollments.id'), nullable=False)
    grade = Column(String)

    # parent relationships (access parent)
    enrollment : Mapped["Enrollment"] = relationship(back_populates=("GradeList"))

    # child relationships (access children)
